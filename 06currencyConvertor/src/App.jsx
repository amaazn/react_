import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/usecurencyinfo'


function App() { 

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => { // event fire kar rakha hai
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App