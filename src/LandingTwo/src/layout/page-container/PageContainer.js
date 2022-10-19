const PageContainer = (props) => {
    return (
        <div className="nk-wrap nk-wrap-nosidebar">
          <div className="nk-content">{props.children}</div>
        </div>
    )
}
export default PageContainer;
