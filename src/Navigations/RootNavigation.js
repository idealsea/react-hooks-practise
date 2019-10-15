import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import StateHook from '../StateHook/Index'
import EffectHook from '../EffectHook/Index'

export default function () {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/state-hook">State Hook</Link>
                        </li>
                        <li>
                            <Link to="/effect-hook">Effect Hook</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/state-hook">
                        <StateHook />
                        <p>state</p>
                    </Route>
                    <Route path="/effect-hook">
                        <EffectHook></EffectHook>
                        <p>effect</p>
                    </Route>
                    <Route path="/">
                        <h1>Home Page</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
