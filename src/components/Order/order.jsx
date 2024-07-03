import { OrderItem } from "../OrderItems/orderItems.jsx";


export const Order = ({ items }) => {
    if (items.length === 0) {
        return <div className="empty-order">Zatím nemáte nic objednáno</div>;
    }

    return (
        <div className="order">
            {items.map(item => (
                <OrderItem key={item.id} name={item.name} image={item.image} />
            ))}
        </div>
    );
};