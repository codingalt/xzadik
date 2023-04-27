class SearchProject {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    searchProject() {
        const keyword = this.queryStr.keyword
        ? {
            keyword: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          }
        : {};
  
      this.query = this.query.find({ ...keyword });
      return this;
    }

  }
  
  module.exports = SearchProject;
  