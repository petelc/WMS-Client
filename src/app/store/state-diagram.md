```mermaid
stateDiagram-v2
    state pageNumber {
        [*] --> pageNumber
        setPageNumber --> pageNumber
        setPriority --> pageNumber
        setRequestType --> pageNumber
        setSearchTerm --> pageNumber
    }

    state priority {
        setPriority --> priority
    }

    state pageSize {
        setPageSize --> pageSize
    }

    state requestType {
        setRequestType --> requestType
    }

    state orderBy {
        setOrderBy --> orderBy
    }

    state searchTerm {
        setSearchTerm --> searchTerm
    }

    setPriority --> priority
    setPriority --> pageNumber
    setRequestType --> requestType
    setRequestType --> pageNumber
    setSearchTerm --> searchTerm
    setSearchTerm --> pageNumber
    setPageNumber --> pageNumber
    setPageSize --> pageSize
    setOrderBy --> orderBy

```
