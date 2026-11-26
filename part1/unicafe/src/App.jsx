import { useState } from 'react'
import Button from './components/Button'
import Title from './components/Title'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title1 = "give feedback"
  const title2 = "statistics"

  const total = good+neutral+bad
  const avg = (good-bad)/total
  const pctPositive = (good/total)*100

  const statistics = [
    {'text': 'good', 'value': good},
    {'text': 'neutral', 'value': neutral},
    {'text': 'bad', 'value': bad},
    {'text': 'all', 'value': total},
    {'text': 'average', 'value': avg},
    {'text': 'positive', 'value': pctPositive + ' %'}
  ]

  return (
    <div>
      <Title text={title1}/>
      <Button onClick={() => setGood(good+1)} text='good' />
      <Button onClick={() => setNeutral(neutral+1)} text='neutral' />
      <Button onClick={() => setBad(bad+1)} text='bad' />
      <Title text={title2}/>
      <Statistics statistics={statistics} total={total} />
    </div>
  )
}

export default App