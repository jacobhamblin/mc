var PackNew = React.createClass({

  render: function () {
    return (

      <div className='packnew'>
        <div class="errors newpack-errors">
        </div>
        <div className='packnew-background' style={{backgroundImage: window.bg}} />
        <div className='form-container-outer'>
          <div className='form-container'>
            <div className='form-title'>
              <h4>Minecraft</h4>
              <h3>Customizer</h3>
            </div>
            <form classname='newpack-form' action='api/packs' method='POST'>
              <input type="text" name="pack[title]" placeholder="Title" className="ffield pack title" tabindex="1" /><br />

              <textarea name="pack[description]" placeholder="Description" className="ffield pack description" tabindex="2" /><br />

              <input type="text" name="pack[url]" placeholder="Download Url" className="ffield pack url" tabindex="3" /><br />

              <input type="text" name="pack[prev]" placeholder="Preview Image Url" className="ffield pack prev" tabindex="4" /><br />

              <input type="submit" value="Create Pack" className="submit pack" tabindex="5" /><br />
            </form>
          </div>
        </div>  
      </div>

    )
  }
})
