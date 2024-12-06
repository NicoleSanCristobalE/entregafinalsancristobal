import React from "react";
import Tab from "./Tab";
import "./../../styles/tab.css"

export default function ProductTabs({ description, features, ingredients }) {
    return (
        <div>
            <ul className="nav nav-tabs" id="productTabs" role="tablist">
                <Tab id="description" label="Descripción" active={true} />
                <Tab id="features" label="Características" />
                <Tab id="ingredients" label="Ingredientes" />
            </ul>
            <div className="tab-content mt-3" id="productTabsContent">
                <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab">
                    <div className="tab-text">
                        <p>{description || "Sin descripción disponible."}</p>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="features"
                    role="tabpanel"
                    aria-labelledby="features-tab">
                    <div className="tab-text">
                        <p>{features || "Sin características disponibles."}</p>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="ingredients"
                    role="tabpanel"
                    aria-labelledby="ingredients-tab">
                    <div className="tab-text">
                        <p>{ingredients || "Sin ingredientes disponibles."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}