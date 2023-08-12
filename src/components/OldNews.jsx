

function OldNews() {
    const articles = [
      {
        id: "01",
        title: "Reviving Retro PCs",
        body: "What happens when old PCs are given modern upgrades?",
        img: require("../assets/images/image-retro-pcs.jpg")
      },
      {
        id: "02",
        title: "Top 10 Laptops of 2022",
        body: "Our best picks for various needs and budgets.",
        img: require("../assets/images/image-top-laptops.jpg")
      },

      {
        id: "03",
        title: "The Growth of Gaming",
        body: "How the pandemic has sparked fresh opportunities.",
        img: require("../assets/images/image-gaming-growth.jpg")
      },
    ];
  
    return (
      <section id="Popular" className="my-14 flex justify-between md:flex-row flex-col gap-4">
        {articles.map((article) => (
          <div key={article.id} className="flex text-left group cursor-pointer">
            <img src={article.img} alt={article.title} className="h-28" />
            <div className="desc ml-4">
              <p className="text-3xl font-semibold ">{article.id}</p>
              <h3 className="font-semibold text-black group-hover:text-soft-orange">
                {article.title}
              </h3>
              <p className="text-sm">{article.body}</p>
            </div>
          </div>
        ))}
      </section>
    );
}

export default OldNews;