---
sidebar_position: 2
---
# Creating a WebView application
In order to make an application from your website you can use webvew

```bash
expo install react-native-webview
```


```bash
# cd into the directory where to store your project
$ cd dir

# initialize the expo project
$ expo init my-project

# navigate inside the newly created project
$ cd my-project

# install the webview package
$ expo install react-native-webview

# run the development server
$ expo start
```

## Creating App.js
```bash
# App.js
import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://reactnative.dev/' }} 
        />
      </SafeAreaView>
    );
  }
}
```
## WebView Navigation 
### [See this github repository for navigation inside WebView Component ](https://github.com/amandeepmittal/react-native-examples/tree/main/rnWebViewCustomNav)