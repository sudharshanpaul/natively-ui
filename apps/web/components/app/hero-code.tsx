export function HeroCode() {
  return (
    <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
      <code className="language-jsx">
        {`import React from 'react';
  import { View } from 'react-native';
  import { Button } from 'natively-ui';
  
  export default function App() {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <Button 
          variant="primary"
          className="px-4 py-2 rounded-md"
          onPress={() => console.log('Button pressed')}
        >
          Get Started
        </Button>
      </View>
    );
  }`}
      </code>
    </pre>
  );
}
