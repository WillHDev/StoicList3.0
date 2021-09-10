//fn component in most cases
//TODO look up when to use class component
import Layout from 'components/Layout';
import { useState } from 'react'

const DEFAULT_DATA = {
    title: "Some Title",
    description: "",
    link: "",
    priority:"2",
    timeToFinish: 60
}

const ResourceCreate = () => {
    const [ form, setForm ] = useState(DEFAULT_DATA);
    const submitForm = () => {
        console.log(JSON.stringify(form));
        alert(JSON.stringify(form));
    }
    
    return (
            <Layout>
                <div className="container">
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="resource-form">
                                <h1 className="title">Add New Resource</h1>
                                    <form>
                                        <div className="field">
                                            <label className="label">Title</label>
                                            <div className="control">
                                                <input 
                                                value={form.title}
                                                className="input" 
                                                type="text" 
                                                placeholder="Learn Next JS and Sanity IO" />
                                        </div>
                                    </div>
                                        <div className="field">
                                            <label className="label">Description</label>
                                            <div className="control">
                                                <textarea 
                                                value={form.description}
                                                className="textarea" 
                                                placeholder="Learn these technologies because they are very popular and enable better SEO">
                                                </textarea>
                                        </div>
                                        </div>
                                    <div className="field">
                                            <label className="label">Link</label>
                                            <div className="control">
                                                <input 
                                                value={form.link}
                                                className="input" 
                                                type="text" 
                                                placeholder="https://academylink.com" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Priority</label>
                                        <div className="control">
                                            <div className="select">
                                            <select value={form.priority}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>
                                    <div className="field">
                                            <label className="label">Time to Finish</label>
                                            <div className="control">
                                                <input
                                                value={form.timeToFinish}
                                                 className="input" 
                                                 type="number" 
                                                 placeholder="60 (Time is in minutes)" />
                                        </div>
                                        <p className="help">Time in minutes</p>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link">Submit</button>
                                        </div>
                                        <div className="control">
                                            <button 
                                            type="button"
                                            onClick={submitForm}
                                            className="button is-link is-light">Cancel</button>
                                        </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           
            </Layout>
    )
}

export default ResourceCreate
