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
                    <p>{description || "Sin descripción disponible."}</p>
                </div>
                <div
                    className="tab-pane fade"
                    id="features"
                    role="tabpanel"
                    aria-labelledby="features-tab">
                    <p>{features || "Sin características disponibles."}</p>
                </div>
                <div
                    className="tab-pane fade"
                    id="ingredients"
                    role="tabpanel"
                    aria-labelledby="ingredients-tab">
                    <p>{ingredients || "Sin ingredientes disponibles."}</p>
                </div>
            </div>
        </div>
    );
}