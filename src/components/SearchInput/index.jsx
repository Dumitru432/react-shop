import React from 'react';
function SearchInput() {
  return (
    <div className="search">
      <form>
        <input type="text" />
        <input type="submit" value={'Search'} />
      </form>
    </div>
  );
}

export default SearchInput;
