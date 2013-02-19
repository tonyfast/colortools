
/**
 * Main JS for the color thing.
 */
(function($, w, undefined) {
  
  // Chroma.js examples are pretty much like this.
  var testData = [25.6, 16.4, 18.9, 34.3, 25.3, 21.3, 39.5, 38.9, 30.8, 38.2, 30.2, 30.8, 26.2, 29.8, 28.1, 25.5, 30.5, 30.0, 38.6, 26.9, 28.5, 27.7, 24.7, 24.4, 53.8, 30.8, 17.2, 32.5, 26.3, 34.3, 33.0, 31.3, 38.3, 31.4, 26.0, 26.8, 28.0, 26.7, 30.2, 23.8, 23.3, 18.9, 17.8, 44.1, 42.4, 16.5, 30.9, 29.9, 28.1, 26.7, 41.3, 29.3, 20.0, 52.5, 33.0, 35.1, 33.1, 34.1, 19.5, 11.7, 38.6, 30.7, 27.6, 21.7, 34.2, 26.0, 47.5, 29.8, 12.1, 14.1, 8.6, 9.5, 25.9, 7.6, 5.4, 25.6, 11.1, 16.8, 23.4, 7.7, 12.0, 12.2, 8.3, 21.8, 11.4, 25.8, 11.0, 18.7, 12.3, 20.1, 9.7, 6.1, 17.4, 9.3, 39.5, 15.9, 20.3, 29.1, 23.0, 36.4, 24.7, 26.2, 30.3, 26.0, 15.0, 35.8, 21.5, 30.7, 33.3, 22.8, 17.9, 38.8, 24.7, 31.6, 24.9, 24.8, 29.9, 26.0, 13.3, 23.7, 38.6, 20.3, 25.4, 41.0, 26.3, 24.9, 28.1, 20.6, 31.9, 24.0, 24.6, 22.3, 41.6, 26.5, 31.0, 40.3, 28.3, 15.5, 23.9, 29.5, 33.4, 16.9, 23.3, 31.9, 25.3, 28.1, 24.3, 29.2, 33.3, 30.6, 26.8, 32.8, 32.5, 43.2, 30.0, 23.0, 25.9, 15.6, 26.9, 33.6, 28.8, 33.9, 34.1, 32.1, 35.6, 34.2, 29.7, 24.5, 50.0, 29.1, 35.7, 32.8, 21.9, 26.5, 23.0, 29.5, 43.6, 12.5, 31.7, 39.4, 27.4, 28.6, 35.3, 35.1, 29.7, 29.4, 22.3, 20.9, 38.3, 28.1, 20.8, 17.0, 26.7, 14.9, 22.9, 16.3, 21.2, 11.2, 27.8, 10.3, 36.2, 24.0, 21.0, 30.4, 18.3, 28.6, 28.0, 27.2, 17.0, 23.7, 28.1, 9.9, 20.3, 26.2, 29.2, 29.1, 14.6, 25.0, 13.3, 15.4, 15.7, 10.1, 20.2, 22.0, 22.4, 16.4, 22.9, 18.4, 14.9, 24.5, 14.3, 7.7, 19.5, 12.6, 18.1, 23.1, 18.0, 27.8, 14.7, 13.1, 26.8, 21.8, 29.7, 29.2, 32.2, 18.8, 14.2, 17.4, 26.4, 15.1, 16.0, 29.1, 13.5, 21.8, 23.8, 30.0, 12.2, 6.3, 17.7, 19.9, 11.6, 25.8, 34.4, 32.0, 24.5, 21.7, 27.3, 14.4, 3.3, 11.3, 8.0, 15.9, 20.4, 12.7, 7.8, 12.3, 13.7, 17.2, 31.3, 24.6, 10.4, 15.8, 19.3, 20.8, 13.0, 11.2, 23.7, 22.2, 18.2, 16.4, 20.7, 13.0, 24.0, 20.3, 18.5, 27.9, 14.1, 12.7, 14.3, 7.2, 29.1, 24.1, 10.3, 27.5, 9.3, 35.9, 23.6, 14.1, 20.5, 11.9, 12.5, 17.7, 15.9, 16.5, 11.3, 9.9, 12.9, 7.1, 5.6, 14.7, 9.9, 5.1, 12.9, 15.9, 17.4, 13.6, 21.5, 30.9, 30.9, 21.9, 25.3, 22.2, 21.6, 25.5, 17.7, 18.7, 28.6, 23.3, 28.5, 13.7, 24.7, 27.9, 37.8, 36.4, 22.7, 27.0, 20.4, 32.9, 32.4, 24.7, 27.8, 24.9, 36.8, 39.8, 41.7, 22.5, 31.9, 20.7, 30.8, 23.9, 25.0, 28.2, 26.0, 20.1, 25.9, 21.7, 37.3, 25.9, 34.6, 22.5, 28.5, 15.3, 24.5, 19.1, 16.2, 18.3];
  var min = Array.min(testData);
  var max = Array.max(testData);
  
  var colorsets = [
    ['#21313E', '#EFEE69'],
    ['#CCFF33', '#3366FF'],
    ['#743C3E', '#D7A24E']
  ];
  
  var colorset = 0;
  var colorsteps = 5;
  
  // Make color space
  var makeSpace = function(cs, steps) {
    return {
      rgb: new chroma.ColorScale({
  			colors: cs,
  			limits: chroma.limits(testData, 'equal', steps),
        mode: 'rgb'
      }),
      hsv: new chroma.ColorScale({
  			colors: cs,
  			limits: chroma.limits(testData, 'equal', steps),
        mode: 'hsv'
      }),
      hcl: new chroma.ColorScale({
  			colors: cs,
  			limits: chroma.limits(testData, 'equal', steps),
        mode: 'hcl'
      }),
      hsi: new chroma.ColorScale({
  			colors: cs,
  			limits: chroma.limits(testData, 'equal', steps),
        mode: 'hsi'
      }),
      lab: new chroma.ColorScale({
  			colors: cs,
  			limits: chroma.limits(testData, 'equal', steps),
        mode: 'lab'
      })
    };
  };
  
  // Function for making scale
  var showScale = function($container, colorSpace) {
    var w = 600;
    var num = 340;
    var pw, i, v, col;
    
    $container.html('');
  
    for (i = 0; i < num; i++) {
      v = i / (num - 1) * (max - min) + min;
      col = colorSpace.getColor(v);
      $container.append('<div class="b" style="background: ' + col + ';" />');
    }
  };
  
  // Fill in spaces
  var makeSteps = function() {
    // Use global variables to change easily with clicks
  
    var cSpace = makeSpace(colorsets[colorset], colorsteps);
    for (var c in cSpace) {
      showScale($('.color-space.' + c), cSpace[c]);
    };
  };
  
  
  $(document).ready(function() {
    makeSteps();
  
    $('.color-set').click(function(e) {
      e.preventDefault();
      colorset = parseInt($(this).data('set'));
      makeSteps();
    });
    $('.color-steps').click(function(e) {
      e.preventDefault();
      colorsteps = parseInt($(this).data('steps'));
      makeSteps();
    })
  });
  
})(jQuery, window);