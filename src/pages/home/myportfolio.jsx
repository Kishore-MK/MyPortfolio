import data from "../../data/index.json";

export default function Myportfolio(){
    return (
        <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container-box">
            <div className="portfolio-container">
                
                <h2 className="section-heading">My Portfolio</h2>
                <a href="https://github.com/Kishore-MK/" target="_blank">
                    <button className="btn btn-github">               
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Visit My Github
                    </button>
                </a>
                <p className="sub-title">Recent Projects</p>
            </div>
        </div>
        <div className="portfolio-section-container">
            
            {data?.portfolio?.map((item,index) =>(
                <div key={index} className="portfolio-section-card">
                    <div className="portfolio-section-img">
                        <img src={item.src} alt=""></img>
                        
                    </div>
                <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                                
                                <a href={item.link} target="_blank"><p className="text-sm portfolio-link">View in Github<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none"
                                >
                                <path
                                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                    stroke="currentColor"
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                </svg>
                            </p></a>
                                
                            </div>
                    
                        </div>
                </div>
                    
            )
            )}
        </div>
    </section>
    );
}