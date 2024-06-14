const AddTask = () => {
    return (
        <>

        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
            <form>
             <div className="field">
                <label>title</label>
                <input type="text" name=" title"  placeholder="Task Title"/>
            </div>
            <div className="field">
                <label>Description</label>
                <textarea placeholder="Task Description" name="Description"></textarea>
            </div>
           
            <button className="ui primary button">
                Submit
            </button>
            </form>

        </div>
        </>

    )
}

export default AddTask;