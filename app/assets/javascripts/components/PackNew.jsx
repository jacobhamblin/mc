var PackNew = React.createClass({

  render: function () {
    return (

      <div className='packnew'>
        <div class="errors newpack-errors">
        </div>
        <div className='packnew-background' />
        <div className='form-container'>
          <form classname='newpack-form' action='api/packs' method='POST'>
            <input type="text" name="pack[title]" placeholder="Title" className="ffield pack title" tabindex="1" />

            <input type="text" name="pack[description]" placeholder="Description" className="ffield pack description" tabindex="2" />

            <input type="text" name="pack[url]" placeholder="Download Url" className="ffield pack url" tabindex="3" />

            <input type="text" name="pack[prev]" placeholder="Preview Image Url" className="ffield pack prev" tabindex="4" />

            <input type="submit" value="Create Pack" className="submit pack" tabindex="5" />
          </form>
        </div>
      </div>

    )
  }
})
