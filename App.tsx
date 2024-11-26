import { useState, useEffect } from 'react';

const MeytahQuonmojiApp = () => {
  const [activeTab, setActiveTab] = useState('dictionary');
  const [symbols, setSymbols] = useState([
    { symbol: '<', meaning: 'Openness', usage: 'Used to express receptivity' },
    { symbol: '>', meaning: 'Closure', usage: 'Used to express finality' },
    { symbol: '^', meaning: 'Elevation', usage: 'Used to express ascension' },
    { symbol: '8', meaning: 'Infinity', usage: 'Used to express boundlessness' },
    { symbol: ';', meaning: 'Pause', usage: 'Used to express stillness' },
  ]);

  const [sentence, setSentence] = useState('');
  const [emotionalExpression, setEmotionalExpression] = useState('');

  useEffect(() => {
    const storedSymbols = localStorage.getItem('symbols');
    if (storedSymbols) {
      setSymbols(JSON.parse(storedSymbols));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('symbols', JSON.stringify(symbols));
  }, [symbols]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSymbolClick = (symbol: string) => {
    setSentence(sentence + symbol);
  };

  const handleEmotionalExpressionChange = (expression: string) => {
    setEmotionalExpression(expression);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-3xl shadow-2xl transition duration-300 ease-in-out">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-deepmagenta animate-pulse">Meytah Quonmoji</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                className={`text-lg ${activeTab === 'dictionary' ? 'bg-deepmagenta text-white' : 'bg-white text-deepmagenta'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('dictionary')}
              >
                Dictionary
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'sentence' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('sentence')}
              >
                Sentence Construction
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'exercises' ? 'bg-yellow-500 text-white' : 'bg-white text-yellow-500'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('exercises')}
              >
                Interactive Exercises
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'forum' ? 'bg-green-500 text-white' : 'bg-white text-green-500'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('forum')}
              >
                Community Forum
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'meditation' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('meditation')}
              >
                Meditation and Mindfulness
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'cognitive' ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-500'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('cognitive')}
              >
                Cognitive Exercises
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'emotional' ? 'bg-violet-500 text-white' : 'bg-white text-violet-500'} rounded-lg p-2 transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleTabChange('emotional')}
              >
                Emotional Expression Tool
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activeTab === 'dictionary' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {symbols.map((symbol, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <h2 className="text-lg font-bold text-deepmagenta">{symbol.symbol}</h2>
                <p className="text-gray-600">{symbol.meaning}</p>
                <p className="text-gray-600">{symbol.usage}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'sentence' && (
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
              className="w-full p-2 rounded-lg border border-orange-500 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-orange-500"
            />
            <div className="flex space-x-4 mt-4">
              {symbols.map((symbol, index) => (
                <button
                  key={index}
                  className="bg-orange-500 text-white rounded-lg p-2 transition duration-300 ease-in-out hover:bg-orange-700 hover:scale-110"
                  onClick={() => handleSymbolClick(symbol.symbol)}
                >
                  {symbol.symbol}
                </button>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'exercises' && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-yellow-500">Interactive Exercises</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        )}
        {activeTab === 'forum' && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-green-500">Community Forum</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        )}
        {activeTab === 'meditation' && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-blue-500">Meditation and Mindfulness</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        )}
        {activeTab === 'cognitive' && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-indigo-500">Cognitive Exercises</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        )}
        {activeTab === 'emotional' && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-violet-500">Emotional Expression Tool</h2>
            <input
              type="text"
              value={emotionalExpression}
              onChange={(e) => handleEmotionalExpressionChange(e.target.value)}
              className="w-full p-2 rounded-lg border border-violet-500 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-violet-500"
            />
            <div className="flex space-x-4 mt-4">
              {symbols.map((symbol, index) => (
                <button
                  key={index}
                  className="bg-violet-500 text-white rounded-lg p-2 transition duration-300 ease-in-out hover:bg-violet-700 hover:scale-110"
                  onClick={() => handleEmotionalExpressionChange(emotionalExpression + symbol.symbol)}
                >
                  {symbol.symbol}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MeytahQuonmojiApp;
