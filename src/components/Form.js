import React from 'react';
import getCurrentDate, { getPastDate } from '../constants/methods';

const Form = ({ data }) => {
    const { query, queryChange, date, querySubmit } = data;
    return (
        <><form onSubmit={querySubmit} className="container">
            <div className="form-group form-inline d-flex justify-content-end">
                <label htmlFor="query">Search Article: </label>
                <input type="text" className="form-control" id="query" name="query" value={query} onChange={queryChange} required />
            </div>
            <div className="form-group d-flex form-inline justify-content-end">
                <label htmlFor="date">Date Published: </label>
                <input type="date" name="date" min={`${getPastDate()}`} max={`${getCurrentDate()}`} id="date" value={date} onChange={queryChange} />
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary px-5 py-1" type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}
export default Form;
