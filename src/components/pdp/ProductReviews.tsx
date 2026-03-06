import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    author: "Maria D.",
    date: "15.01.2023",
    rating: 5,
    text: "Produsul este excelent! Am folosit-o pentru iritațiile copilului și în câteva zile pielea era complet vindecată. Recomand cu încredere!",
    helpful: 8,
  },
  {
    author: "Andrei P.",
    date: "02.12.2022",
    rating: 5,
    text: "Foarte bun pentru pielea uscată și iritată. Rezultate vizibile din prima utilizare. Textura se absoarbe ușor.",
    helpful: 4,
  },
];

const ProductReviews = () => {
  return (
    <div className="px-4 py-4 pb-28">
      <div className="flex items-center justify-between mb-4">
        <h2 className="drmax-section-title">Recenzii clienți</h2>
        <button className="text-xs font-semibold text-primary">Scrie o recenzie</button>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-4 bg-secondary rounded-xl p-4 mb-4">
        <div className="text-center">
          <span className="text-3xl font-extrabold text-foreground block">5.0</span>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-drmax-yellow text-drmax-yellow" />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 block">2 recenzii</span>
        </div>
        <div className="flex-1 space-y-1">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground w-3">{stars}</span>
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-drmax-yellow rounded-full"
                  style={{ width: stars === 5 ? "100%" : "0%" }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground w-3">{stars === 5 ? "2" : "0"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review list */}
      <div className="space-y-3">
        {reviews.map((review, i) => (
          <div key={i} className="bg-card border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.author}</p>
                  <p className="text-[10px] text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-3 h-3 ${
                      s <= review.rating ? "fill-drmax-yellow text-drmax-yellow" : "text-border"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            <button className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground hover:text-primary transition-colors">
              <ThumbsUp className="w-3.5 h-3.5" />
              Util ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
