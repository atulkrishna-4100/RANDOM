function TemporaryPage() {
    return (
        <div>
            <img src="React_Logo.png" width="40px" placeholder="React-Logo"></img>
            <h1>Fun facts about React: </h1>
            <ul>
                <li>Was first released in 2013.</li>
                <li>Was originally created by Jordan Walke.</li>
                <li>Has well over 100K stars on GitHub.</li>
                <li>Is maintained by Facebook.</li>
                <li>Powers thousands of enterprise apps, including mobile apps.</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<TemporaryPage />, document.getElementById("root"))