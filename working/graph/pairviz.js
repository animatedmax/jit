var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem)
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  // init data
  var json = [
      {
        "adjacencies": [
            "Phan Le",
            {
              "nodeTo": "Ted Young",
              "nodeFrom": "Tim Jarratt",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Matt Parker",
              "nodeFrom": "Tim Jarratt",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Rob Day-Reynolds",
              "nodeFrom": "Tim Jarratt",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Abhi Hiremagalur",
              "nodeFrom": "Tim Jarratt",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Chris Adams",
              "nodeFrom": "Tim Jarratt",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Jim Myers",
              "nodeFrom": "Tim Jarratt",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#ffccff",
          "$type": "circle",
          "$dim": 11
        },
        "id": "Tim Jarratt",
        "name": "Tim Jarratt"
      }, {
        "adjacencies": [
            {
              "nodeTo": "Caleb Miles",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Nikhil Gajwani",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Gavin Morgan",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Matthew Boedicker",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jenny Chou",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Amit Gupta",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jesse Zhang",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "August Toman-Yih",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Matt Royal",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Matt Parker",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Rob Day-Reynolds",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Abhi Hiremagalur",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Chris Adams",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jim Myers",
              "nodeFrom": "Ted Young",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#ffcc33",
          "$type": "circle",
          "$dim": 19
        },
        "id": "Ted Young",
        "name": "Ted Young"
      }, {
        "adjacencies": [
            {
              "nodeTo": "Gavin Morgan",
              "nodeFrom": "Caleb Miles",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Aram Price",
              "nodeFrom": "Caleb Miles",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "David Varvel",
              "nodeFrom": "Caleb Miles",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#66ffcc",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Caleb Miles",
        "name": "Caleb Miles"
      }, {
        "adjacencies": [
            {
              "nodeTo": "Gavin Morgan",
              "nodeFrom": "Eric Malm",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Aram Price",
              "nodeFrom": "Eric Malm",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Jesse Zhang",
              "nodeFrom": "Eric Malm",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Matt Royal",
              "nodeFrom": "Eric Malm",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#ffcc33",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Eric Malm",
        "name": "Eric Malm"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#99ff66",
          "$type": "circle",
          "$dim": 5
        },
        "id": "Nikhil Gajwani",
        "name": "Nikhil Gajwani"
      }, {
        "adjacencies": [
          {
            "nodeTo": "Aram Price",
            "nodeFrom": "Gavin Morgan",
            "data": {
              "$color": "#909291"
            }
          }
        ],
        "data": {
          "$color": "#99ff66",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Gavin Morgan",
        "name": "Gavin Morgan"
      }, {
        "adjacencies": [
            {
              "nodeTo": "Jesse Zhang",
              "nodeFrom": "Matthew Boedicker",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "August Toman-Yih",
              "nodeFrom": "Matthew Boedicker",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#99ff66",
          "$type": "circle",
          "$dim": 7
        },
        "id": "Matthew Boedicker",
        "name": "Matthew Boedicker"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#99ff66",
          "$type": "circle",
          "$dim": 5
        },
        "id": "Jenny Chou",
        "name": "Jenny Chou"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 5
        },
        "id": "Amit Gupta",
        "name": "Amit Gupta"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 7
        },
        "id": "Aram Price",
        "name": "Aram Price"
      }, {
        "adjacencies": [
          {
            "nodeTo": "August Toman-Yih",
            "nodeFrom": "Jesse Zhang",
            "data": {
              "$color": "#909291"
            }
          }
        ],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Jesse Zhang",
        "name": "Jesse Zhang"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 7
        },
        "id": "August Toman-Yih",
        "name": "August Toman-Yih"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 6
        },
        "id": "Matt Royal",
        "name": "Matt Royal"
      }, {
        "adjacencies": [
          {
            "nodeTo": "Rob Day-Reynolds",
            "nodeFrom": "Matt Parker",
            "data": {
              "$color": "#557EAA"
            }
          }
        ],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 7
        },
        "id": "Matt Parker",
        "name": "Matt Parker"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#ff33cc",
          "$type": "circle",
          "$dim": 7
        },
        "id": "Rob Day-Reynolds",
        "name": "Rob Day-Reynolds"
      }, {
        "adjacencies": [
            {
              "nodeTo": "Chris Adams",
              "nodeFrom": "Abhi Hiremagalur",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Jim Myers",
              "nodeFrom": "Abhi Hiremagalur",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#33ccccRob Day-Reynolds",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Abhi Hiremagalur",
        "name": "Abhi Hiremagalur"
      }, {
        "adjacencies": [
          {
            "nodeTo": "Jim Myers",
            "nodeFrom": "Chris Adams",
            "data": {
              "$color": "#557EAA"
            }
          }
        ],
        "data": {
          "$color": "#33cccc",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Chris Adams",
        "name": "Chris Adams"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#33ccc",
          "$type": "circle",
          "$dim": 8
        },
        "id": "Jim Myers",
        "name": "Jim Myers"
      }, {
        "adjacencies": [
            {
              "nodeTo": "Dmitriy Kalinin",
              "nodeFrom": "David Varvel",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Kim Hoffman",
              "nodeFrom": "David Varvel",
              "data": {
                "$color": "#557EAA"
              }
            }
        ],
        "data": {
          "$color": "#33cccc",
          "$type": "circle",
          "$dim": 7
        },
        "id": "David Varvel",
        "name": "David Varvel"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#66ffcc",
          "$type": "circle",
          "$dim": 5
        },
        "id": "Dmitriy Kalinin",
        "name": "Dmitriy Kalinin"
      }, {
        "adjacencies": [],
        "data": {
          "$color": "#3366ff",
          "$type": "circle",
          "$dim": 5
        },
        "id": "Kim Hoffman",
        "name": "Kim Hoffman"
      }
  ];
  // end
  // init ForceDirected
  var fd = new $jit.ForceDirected({
    //id of the visualization container
    injectInto: 'infovis',
    //Enable zooming and panning
    //by scrolling and DnD
    Navigation: {
      enable: true,
      //Enable panning events only if we're dragging the empty
      //canvas (and not a node).
      panning: 'avoid nodes',
      zooming: 10 //zoom speed. higher is more sensible
    },
    // Change node and edge styles such as
    // color and width.
    // These properties are also set per node
    // with dollar prefixed data-properties in the
    // JSON structure.
    Node: {
      overridable: true
    },
    Edge: {
      overridable: true,
      color: '#23A4FF',
      lineWidth: 0.4
    },
    //Native canvas text styling
    Label: {
      type: labelType, //Native or HTML
      size: 10,
      style: 'bold'
    },
    //Add Tips
    Tips: {
      enable: true,
      onShow: function(tip, node) {
        //count connections
        var count = 0;
        node.eachAdjacency(function() { count++; });
        //display node info in tooltip
        tip.innerHTML = "<div class=\"tip-title\">" + node.name + "</div>"
          + "<div class=\"tip-text\"><b>Has paired with:</b> " + count + "</div>";
      }
    },
    // Add node events
    Events: {
      enable: true,
      type: 'Native',
      //Change cursor style when hovering a node
      onMouseEnter: function() {
        fd.canvas.getElement().style.cursor = 'move';
      },
      onMouseLeave: function() {
        fd.canvas.getElement().style.cursor = '';
      },
      //Update node positions when dragged
      onDragMove: function(node, eventInfo, e) {
          var pos = eventInfo.getPos();
          node.pos.setc(pos.x, pos.y);
          fd.plot();
      },
      //Implement the same handler for touchscreens
      onTouchMove: function(node, eventInfo, e) {
        $jit.util.event.stop(e); //stop default touchmove event
        this.onDragMove(node, eventInfo, e);
      },
      //Add also a click handler to nodes
      onClick: function(node) {
        if(!node) return;
        // Build the right column relations list.
        // This is done by traversing the clicked node connections.
        var html = "<h4>" + node.name + "</h4><b> connections:</b><ul><li>",
            list = [];
        node.eachAdjacency(function(adj){
          list.push(adj.nodeTo.name);
        });
        //append connections information
        $jit.id('inner-details').innerHTML = html + list.join("</li><li>") + "</li></ul>";
      }
    },
    //Number of iterations for the FD algorithm
    iterations: 200,
    //Edge length
    levelDistance: 130,
    // Add text to the labels. This method is only triggered
    // on label creation and only for DOM labels (not native canvas ones).
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
      var style = domElement.style;
      style.fontSize = "0.8em";
      style.color = "#ddd";
    },
    // Change node styles when DOM labels are placed
    // or moved.
    onPlaceLabel: function(domElement, node){
      var style = domElement.style;
      var left = parseInt(style.left);
      var top = parseInt(style.top);
      var w = domElement.offsetWidth;
      style.left = (left - w / 2) + 'px';
      style.top = (top + 10) + 'px';
      style.display = '';
    }
  });
  // load JSON data.
  fd.loadJSON(json);
  // compute positions incrementally and animate.
  fd.computeIncremental({
    iter: 40,
    property: 'end',
    onStep: function(perc){
      Log.write(perc + '% loaded...');
    },
    onComplete: function(){
      Log.write('done');
      fd.animate({
        modes: ['linear'],
        transition: $jit.Trans.Elastic.easeOut,
        duration: 2500
      });
    }
  });
  // end
}
