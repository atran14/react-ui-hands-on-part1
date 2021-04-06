interface ItemProps {
    icon?: string;
    boldNumberText?: string;
    subText?: string;
}

interface ItemCollectionProps {
    items: ItemProps[];
}

function ItemIconComponent(props: ItemProps) {
    let {icon} = props;

    return <div className={`item-icon fa ${icon} fa-2x`}></div>;
}

function ItemTextComponent(props: ItemProps) {
    let {boldNumberText, subText} = props;

    return (
        <div className="item-sub-container">
            <div className="item-big-bold-text">{boldNumberText}</div>
            <div className="item-text">{subText}</div>
        </div>
    );
}

function ItemComponent(props: ItemProps) {
    let { icon, boldNumberText, subText } = props;

    return (
        <div className="item">
            <ItemIconComponent icon={icon} />
            <ItemTextComponent
                boldNumberText={boldNumberText}
                subText={subText}
            />
        </div>
    );
}

export const ItemContainer = (props: ItemCollectionProps) => {
    return (
        <div className="item-container">
            {props.items.map((item) => {
                return (
                    <ItemComponent
                        icon={item.icon}
                        boldNumberText={item.boldNumberText}
                        subText={item.subText}
                    />
                );
            })}
        </div>
    );
}