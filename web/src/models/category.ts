export default interface CategoryData {
    ID: Number,
    title: String,
    item?: CategoryData,
    children?: CategoryData
}