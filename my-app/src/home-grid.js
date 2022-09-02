export const HomeGrid = () => {
    return (
        <div>
        <div className = "headingp-8 m-10">
            <h1 className = "text-5xl font-light">Emma Thomas Portfolio</h1>
            </div>

            <div class="grid grid-cols-2 gap-20 m-16">
            <div className = "container bg-gray-200 rounded h-64 ">Project 1</div>
            <div className = "container bg-gray-200 rounded h-64" >Project 2</div>
        </div>
        </div>
    )
}

export default HomeGrid;