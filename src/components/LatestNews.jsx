import web3ImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import web3ImgMobile from "../assets/images/image-web-3-mobile.jpg";

function LatestNews() {
  const newArticles = [
    {
      title: "Hydrogen VS Electric Cars",
      body: "Will hydrogen-fueled cars ever catch up to EVs?",
    },

    {
      title: "The Downsides of AI Artistry",
      body: "What are the possible adverse effects of on-demand AI image generation?",
    },

    {
      title: "Is VC Funding Drying Up?",
      body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <section className="latestNews md:flex">
      <section className="web3">
        {/* Web 3 image */}
        <div className="md:hidden">
          <img src={web3ImgMobile} alt="web3 image" />
        </div>

        <div className="hidden md:block">
          <img src={web3ImgDesktop} alt="web3 image" />
        </div>

        <div className="intro my-4 text-left md:flex">
          <h1 className="text-5xl font-bold text-black">
            The Bright Future of Web 3.0?
          </h1>
          {/* description */}
          <div className="md:w-1/2">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="px-6 py-2 bg-soft-red capitalize text-off-white">
              Read more
            </button>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="md:ml-6 latestArticles bg-dark-blue py-4">
        <h2 className="text-soft-orange text-4xl font-semibold divide-solid divide-cyan-50 ">
          New
        </h2>
        <div className="newArticles text-left divide-y divide-off-white">
          {newArticles.map((news) => (
            <div key={news.title} className="news py-4 px-3 ">
              <h3 className="text-off-white text-xl font-semibold">
                {news.title}
              </h3>
              <p>{news.body}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default LatestNews;
