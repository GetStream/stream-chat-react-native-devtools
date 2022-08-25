import React, { useRef, useEffect } from "react";
import type { Flipper } from "react-native-flipper";
import {
    DebugContextValue,
    DebugDataType,
    DefaultStreamChatGenerics,
} from "stream-chat-react-native-core";

let FlipperModule: typeof import("react-native-flipper") | undefined;

try {
    FlipperModule = require("react-native-flipper");
} catch (error) {
    console.log(error);
}

export function useFlipper<
    StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(): {
    updateData: (
        ref: React.RefObject<DebugContextValue<StreamChatGenerics>>
    ) => void;
} {
    if (!FlipperModule) {
        throw new Error(
            "Please install the `react-native-flipper` package in your project to use Flipper integration for React Navigation"
        );
    }

    const { addPlugin } = FlipperModule;
    const connectionRef = useRef<Flipper.FlipperConnection>();

    const send = async (
        action: string,
        data: DebugDataType<StreamChatGenerics>
    ) => {
        await connectionRef.current?.send(action, data);
    };

    const receive = async (
        methodName: string,
        listener: (...args: any[]) => Promise<any>
    ) => {
        await connectionRef.current?.receive(methodName, listener);
    };

    const updateData = async (
        ref: React.RefObject<DebugContextValue<StreamChatGenerics>>
    ) => {
        if (ref.current) {
            const { eventType, sendEventParams, receiveEventParams } =
                ref.current;
            if (eventType === "send" && sendEventParams) {
                await send(sendEventParams.action, sendEventParams.data);
            } else if (
                ref.current.eventType === "receive" &&
                receiveEventParams
            ) {
                await receive(
                    receiveEventParams.methodName,
                    receiveEventParams.listener
                );
            }
        }
    };

    useEffect(() => {
        addPlugin({
            getId() {
                return "StreamChatReactNative";
            },
            async onConnect(connection) {
                connectionRef.current = connection;
            },
            onDisconnect() {
                connectionRef.current = undefined;
            },
            runInBackground() {
                return false;
            },
        });
    }, [addPlugin]);

    return { updateData };
}
