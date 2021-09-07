import React, { useState } from 'react'

const Tabs = (props) => {

    const [content, setContent] = useState(props.allTabs[0].content);

    return (
        <fieldset>
            <legend>Tabs.jsx</legend>
            <div>
                {
                    props.allTabs.map( (tab, idx) => {
                        return (
                        <button key={idx} onClick={(e) => setContent(e.target.value)} value={tab.content}>{tab.label}</button>
                        )
                    })
                }
            </div>
            <div>
                <p>{JSON.stringify(content)}</p>
            </div>
        </fieldset>
    )
}

export default Tabs;