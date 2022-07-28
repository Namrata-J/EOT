export const filterTagsFunc = (posts, state) => {
    return state.filteredTags.length === 0 ?
        posts :
        [...posts].filter((post) => post.tags.some((tag) => state.filteredTags.includes(tag)))
}