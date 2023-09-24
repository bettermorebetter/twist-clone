import Link from "next/link";

interface TweetProps {
  id: number;
}

export default function Tweet({ id }: TweetProps) {
  return (
    <Link
      href={`/tweet/${id}`}
      className="cursor-pointer flex
    p-2"
    >
      <div>
        <div className="w-8 h-8 bg-red-400 rounded-full"></div>
      </div>
      <div className="pl-2">
        <p className="font-semibold">아이유</p>
        <p>달달한 로맨스가 필요한 나, 다큐를 좋아하는 나, 넷플 뭐봄?</p>
      </div>
    </Link>
  );
}
