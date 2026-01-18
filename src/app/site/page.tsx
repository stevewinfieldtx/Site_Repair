import React, { useState } from 'react';

export default function SitePage() {
  const [backgroundColor, setBackgroundColor] = useState<string>('white');

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
    // In a real application, you might use an API call here to persist the change or interact with a backend service.
    // For example, if using Mastra AI as described in the search results: [mastra.ai](https://mastra.ai/reference/client-js)
    // await mastraClient.getAgent('your-agent-id').executeTool('changeColor', { color: color });
    // Or using Pydantic AI tools: [ai.pydantic.dev](https://ai.pydantic.dev/examples/ag-ui/)
    // The AG-UI example shows a 'background' tool for this purpose.
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500"
      style={{ backgroundColor }}
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Our Site</h1>
      <p className="text-lg mb-8 text-gray-700">A place for innovation and creativity.</p>
      <div className="flex space-x-4">
        <button
          onClick={() => handleColorChange('blue')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Change to Blue
        </button>
        <button
          onClick={() => handleColorChange('green')}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Change to Green
        </button>
        <button
          onClick={() => handleColorChange('red')}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Change to Red
        </button>
        <button
          onClick={() => handleColorChange('white')}
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          Reset to White
        </button>
      </div>
    </div>
  );
}
