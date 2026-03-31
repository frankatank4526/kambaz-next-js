import Link from "next/link";
export default function labs() {
    return (
        <div id="wd-labs">
            <h1>Labs, Frank Glantz</h1>
            <h2>Asynchronous Online Section</h2>
            <h2> Click
                <a style={{ paddingLeft: '4px', paddingRight: '4px' }} href="https://github.com/frankatank4526/kambaz-next-js/tree/a5" id="wd-github">here</a>
                for my React Project GitHub repository. </h2>
            <ul>
                <h2> Click
                <a style={{ paddingLeft: '4px', paddingRight: '4px' }} href="https://github.com/frankatank4526/kambaz-node-server-app" id="wd-github">here</a>
                for my Node ServerGitHub repository. </h2>
            <ul></ul>
                <li>
                    <Link href="/labs/lab1" id="wd-lab1-link">
                        Lab 1: HTML Examples </Link>
                </li>
                <li>
                    <Link href="/labs/lab2" id="wd-lab2-link">
                        Lab 2: CSS Basics </Link>
                </li>
                <li>
                    <Link href="/labs/lab3" id="wd-lab3-link">
                        Lab 3: JavaScript Fundamentals </Link>
                </li>
                <li>
                    <Link href="/labs/lab4" id="wd-lab4-link">
                        Lab 4: Managing State in React Applications </Link>
                </li>
                <li>
                    <Link href="/labs/lab5" id="wd-lab4-link">
                        Lab 5: HTTP Servers and APIs, Express.js </Link>
                </li>
                <li>
                    <Link href="/" id="wd-kambaz-link">
                        Kambaz </Link> </li>
            </ul>
        </div>
    );
}
