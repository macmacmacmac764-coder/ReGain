import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.regain.focusshield',
  appName: 'ReGain',
  webDir: 'dist',
  android: {
    allowMixedContent: false,
    backgroundColor: '#0a0e1a',
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
}

export default config
