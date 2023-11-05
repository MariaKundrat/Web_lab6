import './Filters.scss';

const Filters = () => {
    return (
        <div className="filters">
            <div className="brand_filter">
                <select id="brand">
                    <option value="">Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Poco">Poco</option>
                    <option value="Google">Google</option>
                </select>
            </div>
            <div className="model_filter">
                    <select id="model">
                    <option value="">Model</option>
                    <option value="Galaxy S21">Galaxy S21</option>
                    <option value="iPhone 13">iPhone 13</option>
                    <option value="Pixel 6">Pixel 6</option>
                    <option value="Magic">Magic</option>
                    <option value="X3">X3</option>
                    <option value="Nova 10">Nova 10</option>
                </select>
            </div>
            <div className="price_filter">
                <input type="number" id="price" placeholder="Price $"/>
            </div>
            <button className="search_button"> Search </button>
        </div>
    );
};

export default Filters;
