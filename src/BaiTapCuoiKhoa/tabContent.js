import React from "react";
import { Fragment } from "react";
import ItemContent from "./ItemContent";

import Data from '../Data/Data.json'
export default function TabContent() {

  const listContent = Data.tabPanes
  const listTopClothes = listContent.filter(item => item.type === 'topclothes')
  const listBotClothes = listContent.filter(item => item.type === 'botclothes')
  const listShoes = listContent.filter(item => item.type === 'shoes')
  const listHandbags = listContent.filter(item => item.type === 'handbags')
  const listNecklaces = listContent.filter(item => item.type === 'necklaces')
  const listHairstyle = listContent.filter(item => item.type === 'hairstyle')
  const listBackgourd = listContent.filter(item => item.type === 'background')

  {console.log("List Content Rerender");}

  return (
    <Fragment>
      <div className="well">
        <div className="tab-content">
        <div className="tab-pane container active" id="tabTopClothes">
          <ItemContent list={listTopClothes}/>
        </div>

          <div className="tab-pane container fade" id="tabBotClothes">
          <ItemContent list={listBotClothes}/>
          </div>
          <div className="tab-pane container fade" id="tabShoes">
          <ItemContent list={listShoes}/>
          </div>
          <div className="tab-pane container fade" id="tabHandBags">
          <ItemContent list={listHandbags}/>
          </div>
          <div className="tab-pane container fade" id="tabNecklaces">
          <ItemContent list={listNecklaces}/>
          </div>
          <div className="tab-pane container fade" id="tabHairStyle">
          <ItemContent list={listHairstyle}/>
          </div>
          <div className="tab-pane container fade" id="tabBackground">
          <ItemContent list={listBackgourd}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
