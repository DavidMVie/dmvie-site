import React, { useContext, useState, useEffect } from 'react';

import moment from 'moment';

import { BlogsContext } from '../contexts/BlogsContext';
import { getVisibleItems } from '../selectors/global';
import GridService from './services/GridService/GridService';
import PaginationService  from './services/PaginationService/PaginationService';
import SelectService from './services/SelectService/SelectService';
import { DateRangePicker } from 'react-dates';


const ArticlesPage = () => {

  const { blogs }  = useContext(BlogsContext);
  // filtered items will hold an array of the remaining blogs,  once they've been passed through the filters. 
  // the state before filtering starts off as just a copy of blogs
  const [ filteredItems, setfilteredItems ] = useState([...blogs]);

  const [ filters, setFilters ] = useState({
    show: 'all',
    sortBy: 'desc',
    startOfRangeDate: moment().subtract(180, 'days'),
    endOfRangeDate: moment()
  });

    // paginatedItems takes the filtered items and tracks the current page of projects
    const [ paginatedItems, setPaginatedItems ] = useState([...filteredItems])

    const [ paginationSettings, setPaginationSettings ] = useState({
      onPage: 1,
      itemsPerPage: 6
    });

  // For react-dates date-picker
  const [ focusedInput, setFocusedInput ] = useState(null) 

  const onDatesChange = ({startDate, endDate}) => { 
    setfilteredItems([...blogs])
    setFilters({
      ...filters,
      startOfRangeDate: startDate,
      endOfRangeDate: endDate
    })
  }

  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput)
  }
  const falseFunc = () => false;

  const getArticlesByTag = (show) => {
    // As done in other functions first need to reset the subset back to all blogs (clean slate), then set the new filters, which in turn will cause useEffect to run  which will pass the blogs through the filters using getVissibleItems selector function.
    setfilteredItems([...blogs])
    setFilters({
      ...filters,
      show
    })
  }

  const articlesFilterOptions = [{
    optionValue: 'all',
    textContent: 'All',
  },{
    optionValue: 'the web',
    textContent: 'The Web'
  },{
    optionValue: 'javascript',
    textContent: 'Javascript'
  },{
    optionValue: 'nodeJS',
    textContent: 'NodeJS'
  },{
    optionValue: 'css',
    textContent: 'CSS'
  },{
    optionValue: 'reactJS',
    textContent: 'ReactJS'
  },{
    optionValue: 'angular',
    textContent: 'Angular'
  },{
    optionValue: 'web components',
    textContent: 'Web Components'
  },{
    optionValue: 'expressJS',
    textContent: 'ExpressJS'
  }];

  const articlesSortOptions = [{
    optionValue: 'desc',
    textContent: 'Latest Top',
  },{
    optionValue: 'asc',
    textContent: 'Oldest Top',
  }];

  const onSortChange = (e) => {
    setFilters({
      ...filters,
      sortBy: e.target.value
    })
  }

  const onFilterChange = (e) => {
    // reset the data
    setfilteredItems([...blogs])
    setFilters({
      ...filters,
      show: e.target.value
    })
  }

  const onPageClicked = (e) => {    
    console.log(`Page number ${parseInt(e.target.textContent)} was clicked....`);    
    setPaginationSettings({
      ...paginationSettings,
      onPage: parseInt(e.target.textContent)
    })
  }

  useEffect(() => {
    setfilteredItems(getVisibleItems('blogs', filteredItems, filters));
    setPaginationSettings({
      ...paginationSettings,
      onPage: 1
    })
  }, [filters])

  useEffect(() => {
    getPageItems()
 }, [filteredItems, paginationSettings])

   const getPageItems = () => {
    const skip = (paginationSettings.onPage - 1) * paginationSettings.itemsPerPage;
    const paginated = [...filteredItems].splice(skip, paginationSettings.itemsPerPage);
    setPaginatedItems(paginated)
  }

  return (
    <>
    <section className="sect blogs-page">
    <h1>All Articles</h1>
    <p>Some of my latest, usually troubled musings :)</p>
      <div className="select-filters blogs-filters">
        Showing 
        <SelectService 
          addClass="select-css" 
          options={articlesFilterOptions} 
          onChange={onFilterChange}
          value={filters.show}
        />
        related entries with the 
        <SelectService 
          addClass="select-css"
          options={articlesSortOptions}
          onChange={onSortChange}
        />
      </div>
      that were created between 
      <DateRangePicker
        startDate={filters.startOfRangeDate} // momentPropTypes.momentObj or null,
        startDateId="startDateRange" // PropTypes.string.isRequired,
        endDate={filters.endOfRangeDate} // momentPropTypes.momentObj or null,`
        endDateId="endDateRange" // PropTypes.string.isRequired,
        onDatesChange={onDatesChange}
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={onFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={falseFunc}
        showClearDates={false}
      />
    </section>
    <section className="sect blogs-page">
      <PaginationService 
        listLength={filteredItems.length}
        onPageClicked={onPageClicked}
        paginationSettings={paginationSettings}
      />
      <GridService 
        list={paginatedItems} 
        imgOverlay={true} 
        serviceType={"blogsThumb"} 
        staticOverlay={true}
        getArticlesByTag={getArticlesByTag}
      />
    </section>
  </>
)
}

export default ArticlesPage
