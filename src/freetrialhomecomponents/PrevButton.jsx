
const PrevButton = ({ onClick }) => (
    <button
      className="modulearrowbtn"
      onClick={onClick}
      style={{top:'50%',left:'0',zIndex:'1'}}
    >
      <img src="https://ulearn.uniathena.com/Images/prev.png" alt="" />
    </button>
  );

export default PrevButton