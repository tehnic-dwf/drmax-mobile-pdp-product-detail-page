import { Star, ThumbsUp } from "lucide-react";
import { type Product } from "@/data/products";

type Props = { product: Product };

const cicaplastReviews = [
  {
    author: "Maria D.", date: "15.01.2023", rating: 5,
    text: "Produsul este excelent! Am folosit-o pentru iritațiile copilului și în câteva zile pielea era complet vindecată. Recomand cu încredere!",
    helpful: 8,
  },
  {
    author: "Andrei P.", date: "02.12.2022", rating: 5,
    text: "Foarte bun pentru pielea uscată și iritată. Rezultate vizibile din prima utilizare. Textura se absoarbe ușor.",
    helpful: 4,
  },
];

const sideralReviews = [
  {
    author: "Elena M.", date: "10.09.2024", rating: 5,
    text: "Am luat Sideral Forte la recomandarea medicului pentru anemie. În 2 luni valorile hemoglobinei au crescut semnificativ. Nu am avut niciun efect gastric!",
    helpful: 12,
  },
  {
    author: "Ion C.", date: "05.07.2024", rating: 3,
    text: "Produs bun dar scump. Funcționează, însă sunt alternative mai accesibile ca preț.",
    helpful: 6,
  },
  {
    author: "Ana R.", date: "20.03.2024", rating: 3,
    text: "Am folosit o lună, rezultate ok dar nu spectaculoase. Poate e nevoie de mai mult timp.",
    helpful: 2,
  },
];

const ProductReviews = ({ product }: Props) => {
  const reviews = product.slug.includes("cicaplast") ? cicaplastReviews : sideralReviews;

  const avgRating = product.rating;
  const reviewCount = product.reviewCount;

  // Calculate rating distribution
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
  }));

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="drmax-section-title">Recenzii clienți</h2>
        <button className="text-xs font-semibold text-primary">Scrie o recenzie</button>
      </div>

      <div className="flex items-center gap-4 bg-secondary rounded-xl p-4 mb-4">
        <div className="text-center">
          <span className="text-3xl font-extrabold text-foreground block">{avgRating}</span>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`w-3.5 h-3.5 ${s <= Math.round(avgRating) ? "fill-drmax-yellow text-drmax-yellow" : "text-border"}`} />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 block">{reviewCount} recenzii</span>
        </div>
        <div className="flex-1 space-y-1">
          {distribution.map(({ stars, count }) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground w-3">{stars}</span>
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-drmax-yellow rounded-full"
                  style={{ width: reviewCount > 0 ? `${(count / reviewCount) * 100}%` : "0%" }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground w-3">{count}</span>
            </div>
          ))}
        </div>
      </div>

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
                    className={`w-3 h-3 ${s <= review.rating ? "fill-drmax-yellow text-drmax-yellow" : "text-border"}`}
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
