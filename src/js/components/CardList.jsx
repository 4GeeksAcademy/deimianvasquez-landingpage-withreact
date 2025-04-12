import Card from "./Card";

const CardList = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Card
                    image="https://picsum.photos/id/238/300/300"
                    title="Card Number 1"
                />
                <Card
                    image="https://picsum.photos/id/239/300/300"
                    title="Card Number 2"

                />
                <Card
                    image="https://picsum.photos/id/240/300/300"
                    title="Card Number 3"
                />
                <Card
                    image="https://picsum.photos/id/241/300/300"
                    title="Card Number 4"
                />
                <Card
                    image="https://picsum.photos/id/242/300/300"
                    title="Card Number 5"

                />
            </div>
        </div>
    )
}

export default CardList;