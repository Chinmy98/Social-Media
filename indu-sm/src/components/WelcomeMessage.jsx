const WelcomeMessage = ({getOnClickFeatch}) => {
  return <div className="bg-light text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-black">No Post Featched</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">Please click below button to featch your posts</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" onClick={getOnClickFeatch} className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold">Featch Post</button>
        </div>
      </div>
    </div>
  </div>

}
export default WelcomeMessage;