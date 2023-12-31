import 'dotenv/config'

export default {
  "expo": {
    "name": "FirebaseChatApp",
    "slug": "FirebaseChatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.api_Key,
      authDomain: process.env.auth_Domain,
      projectId: process.env.project_Id,
      storageBucket: process.env.storage_Bucket,
      messagingSenderId: process.env.messaging_SenderId,
      appId: process.env.app_Id
    }
  }
}
