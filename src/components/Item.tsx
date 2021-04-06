interface ItemProps {
    icon?: string;
    boldNumberText?: string;
    subText?: string;
  }
  
  interface ItemCollectionProps {
    items: ItemProps[];
  }
  
  function ItemIconComponent(props: ItemProps) {
    return <div className={`item-icon fa ${props.icon} fa-2x`}></div>;
  }
  
  function ItemTextComponent(props: ItemProps) {
    return (
      <div className="item-sub-container">
        <div className="item-big-bold-text">{props.boldNumberText}</div>
        <div className="item-text">{props.subText}</div>
      </div>
    );
  }
  
  function ItemComponent(props: ItemProps) {
    return (
      <div className="item">
        <ItemIconComponent icon={props.icon} />
        <ItemTextComponent
          boldNumberText={props.boldNumberText}
          subText={props.subText}
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