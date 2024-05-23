const ApprovalBox = ({ title, count }) => {
    return (
        <div >
            <div className="card info-card sales-card" style={{ textDecoration: 'none'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex justify-content-end">
                        <h3>{count}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalBox;