/* Needs converting into a jquery extension */

function addNode(parentNode, cssClass, id, value, tooltip) {
    parentNode.append("<span class='" + cssClass + "' id='" + id + "' title='"+ tooltip +"'>" + value + "</span>");
}

function getNodeCssClass(type) {
    switch(type){
        case "value": return "exprNodeValue";
        case "structure": return "exprNodeStructure";
        default: return "";
    }
}

function buildTree(domNode, node, nodeId) {

    addNode(domNode, getNodeCssClass(node.Type), nodeId, node.Text, node.Tooltip);

    if (node.Children.length > 0) {
        $("#" + nodeId).addClass("exprNodeParent");
        addNode(domNode, "exprNodeContainer", nodeId + "-children", "", "");
        var newChildContainer = domNode.children(".exprNodeContainer:last");

        for (var i = 0; i < node.Children.length; i++) {
            buildTree(newChildContainer, node.Children[i], nodeId + "-" + i);
        }
    }
}

function expressionExpand(parentId) {
    $("#" + parentId).hide();
    $("#" + parentId + "-children").show();
}

function expressionCollapse(childrenId) {
    $("#" + childrenId).hide();
    $("#" + childrenId.replace("-children", "")).show();
}

function expressionExplorer(containerId, treeData) {

    var rootNodeId = containerId + "-root";

    $("#" + containerId).html("");
    buildTree($("#" + containerId), treeData, rootNodeId);

    $(".exprNodeContainer").hide();

    $(".exprNodeContainer").prepend("<span class='exprNodeContainerCollapse'>&#x2212;</span>");

    $(".exprNodeContainerCollapse").click(function () {
        expressionCollapse($(this).parent().attr("id"));
    });

    $(".exprNodeParent").click(function () {
        expressionExpand($(this).attr("id"));
    });
}
