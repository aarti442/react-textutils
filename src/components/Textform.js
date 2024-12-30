import React, { useState } from 'react'

export default function Textform({ heading, mode, activeColor }) {
    const handleUPClick = () => {
        console.log("Uppercase is clicked ")
        let newtext = text.toUpperCase(text)
        setText(newtext)
    }
    const handleLWClick = () => {
        console.log("Lowercase is clicked ")
        let newtext = text.toLowerCase(text)
        setText(newtext)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");




    const generateGradient = (color) => {
        // Create a gradient using the base color
        return `linear-gradient(to right, ${color}, ${shadeColor(color, 20)}, ${shadeColor(color, -20)})`;
    };

    const shadeColor = (color, percent) => {
        // Function to lighten or darken a color
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = ((num >> 8) & 0x00ff) + amt;
        const B = (num & 0x0000ff) + amt;
        return `#${(
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)}`;
    };

    return (
        <section className='textsection'>
            <div className='container'>
                <div className='textform'>
                    <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>{heading} </h2>

                    <div className="mb-3">
                        <label className={`form-label text-${mode === 'light' ? 'dark' : 'white'}`}>Message</label>
                        <textarea className="form-control" id="message" onChange={handleOnChange} value={text} rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <button id="submitform" className='btn btn-primary' style={{
                            background: generateGradient(activeColor), border: '1px solid #fff'
                        }} onClick={handleUPClick}> Convert to Uppercase</button>
                        <button id="submitform1" className='btn btn-primary' style={{
                            background: generateGradient(activeColor), border: '1px solid #fff'
                        }} onClick={handleLWClick}> Convert to Lowercase</button>
                    </div>
                    <div className="row">
                        <div className='summery'>
                            <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Text Summery</h2>
                            <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>{text.split(" ").length} words and {text.length} characters</p>
                            <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>{0.008 * text.split(" ").length} minutes read</p>
                            <h3 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Preview</h3>
                            <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
