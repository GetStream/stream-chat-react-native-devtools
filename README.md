### Stream Chat React Native Devtools 🚀

Stream chat React Native Devtools is a collection of all the development tools you will need for the [Stream Chat React Native](https://github.com/GetStream/stream-chat-react-native) SDK.

[![NPM](https://img.shields.io/npm/v/stream-chat-react-native-devtools.svg)](https://www.npmjs.com/package/stream-chat-react-native-devtools)

## 📝 Tools Available

- The `useFlipper` hook to debug the SDK with [Flipper](https://fbflipper.com/docs/extending/flipper-plugin/). To use follow the guide [here](https://getstream.io/chat/docs/sdk/reactnative/guides/debug-mode-using-flipper-plugin/).

## ⚙️ How to use the package?

- Install the package using:

```
yarn add --dev stream-chat-react-native-devtools
```  

or

```
npm install --save-dev stream-chat-react-native-devtools
```

- Import the tools as follows:

```tsx
import { useFlipper } from 'stream-chat-react-native-devtools'; // Similarly, you can import other tools exposed by the library.
```

## 👏 Contributing

We welcome code changes that improve this library or fix a problem, and please make sure to follow all best practices and test all the changes. We are pleased to merge your code into the official repository. Make sure to sign our [Contributor License Agreement (CLA)](https://docs.google.com/forms/d/e/1FAIpQLScFKsKkAJI7mhCr7K9rEIOpqIDThrWxuvxnwUq2XkHyG154vQ/viewform) first. See our license file for more details.

To contribute to this project, you can follow the following steps:

- Clone this repository.
- Install all the dependencies using `yarn` or `npm`. We recommend using [Yarn](https://yarnpkg.com/).
- To build the plugin's code use `yarn build`.

## Git flow & Release process

We enforce conventional commits and have an automated releasing process using workspaces and semantic-release. Read our [git flow & release process guide](https://github.com/GetStream/stream-chat-react-native/blob/main/RELEASE_PROCESS.md) for more information.

## We are hiring

We've recently closed a [\$38 million Series B funding round](https://techcrunch.com/2021/03/04/stream-raises-38m-as-its-chat-and-activity-feed-apis-power-communications-for-1b-users/) and we keep actively growing.
Our APIs are used by more than a billion end-users, and you'll have a chance to make a huge impact on the product within a team of the strongest engineers all over the world.

Check out our current openings and apply via [Stream's website](https://getstream.io/team/#jobs).