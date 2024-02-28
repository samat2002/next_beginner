import type { AppProps } from "next/app";

function Sidebar() {
    return <section id="sidebar" className="bg-white rounded-se-full">
        <div className="side-item mt-20">
            <div className="brand">
                <img src="https://images5.alphacoders.com/481/thumb-440-481903.webp" alt="" />
            </div>
            <hr />
            <div className="place">
                <i></i>
                <h5>Place</h5>
            </div>
        </div>
    </section>
}

export default Sidebar;

