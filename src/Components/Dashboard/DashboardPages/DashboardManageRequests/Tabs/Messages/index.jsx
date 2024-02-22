import MessageBox from "./messageBox";

const Messages = () => {
    return (
        <div className="px-4 pt-[10px] pb-[56px]">
           <MessageBox ff={1}/>
           <MessageBox ff={1} />
           <MessageBox ff={2} />
           <MessageBox ff={3} />
           <MessageBox ff={1} />
           <MessageBox ff={2} />
           <MessageBox ff={1} />
           <MessageBox ff={3} />
        </div>
    );
}

export default Messages;