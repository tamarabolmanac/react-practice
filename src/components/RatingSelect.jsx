import { useState } from "react"

function RatingSelect ({select}) {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
      setSelected(+e.target.value)
      select(+e.target.value)
    }

    return (
        <ul>
            <li>
                <input
                    type='radio'
                    id='num1'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}>
                </input>
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='num10'
                    value='10'
                    onChange={handleChange}
                    checked={selected === 10}>
                </input>
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    )
}

export default RatingSelect