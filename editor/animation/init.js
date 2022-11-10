requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function squaresIntersectAnimation(tgt_node, data) {

            if (!data || !data.ext) {
                return
            }

            const input = data.in
            // -------------------------------------
            // input_type is tuple !!
            // -------------------------------------
            /// eg :
            //  data.in = [
            //      {
            //          "___checkio___type___": "tuple",
            //          "values": [2, 2, 3]
            //      },
            //      {
            //          "___checkio___type___": "tuple",
            //          "values": [5, 5, 2]
            //      },
            //  ]

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                axis: {
                    'stroke-width': '1px',
                    'stroke': '#294270',
                    'arrow-end': 'block-wide-long',
                },
                scale: {
                    'stroke-width': '0.5px',
                    'stroke': '#4094c7',
                },
                square: {
                    'stroke-width': '1px',
                    'stroke': '#F0801A',
                    'opacity': '0.7',
                    'fill': '#FABA00',
                },
                number: {
                    'font-family': 'sans-serif',
                    'stroke-width': 0,
                    'fill': '#294270',
                },
            }

            /*----------------------------------------------*
             *
             * values
             *
             *----------------------------------------------*/
            const grid_size_px = 200
            const os = 15
            const [x1, y1, l1] = input[0].values
            const [x2, y2, l2] = input[1].values
            const x_max = Math.max(x1+l1, x2+l2)
            const y_max = Math.max(y1+l1, y2+l2)
            const c_max = Math.max(x_max, y_max)
            const coord_max = c_max + (c_max % 2)
            const ratio = grid_size_px / coord_max

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const paper = Raphael(tgt_node, grid_size_px+os*2, grid_size_px+os*2, 0, 0)

            /*----------------------------------------------*
             *
             * draw squares
             *
             *----------------------------------------------*/
            paper.rect(
                x1 * ratio + os, (coord_max - y1 - l1) * ratio + os,
                l1 * ratio, l1 * ratio,
            ).attr(attr.square)

            paper.rect(
                x2 * ratio + os, (coord_max - y2 - l2) * ratio + os,
                l2 * ratio, l2 * ratio,
            ).attr(attr.square)

            /*----------------------------------------------*
             *
             * draw axis
             *
             *----------------------------------------------*/
            // horizontal
            paper.path(['M', os, grid_size_px+os, 'h', grid_size_px]).attr(attr.axis)

            // vertical
            paper.path(['M', os, grid_size_px+os, 'v', -grid_size_px]).attr(attr.axis)

            /*----------------------------------------------*
             *
             * draw half scale
             *
             *----------------------------------------------*/
            // vertical scale |
            paper.path(
                [
                    'M', os + grid_size_px / 2, os,
                    'v', grid_size_px + os * (1/4)
                ]
            ).attr(attr.scale)

            // horizontal scale ---
            paper.path(
                [
                    'M', os * (3/4), os + grid_size_px / 2,
                    'h', grid_size_px + os * (1/4)
                ]
            ).attr(attr.scale)

            /*----------------------------------------------*
             *
             * scale numbar
             *
             *----------------------------------------------*/
            attr.number['font-size'] = Math.min(10, grid_size_px * (1/20)) +'px'

            // origin
            paper.text(
                os / 2,
                grid_size_px + os * (3/2),
                0
            ).attr(attr.number)

            // horizontal
            paper.text(
                os + grid_size_px / 2,
                grid_size_px + os * (3/2),
                coord_max / 2
            ).attr(attr.number)
        }

        var io = new extIO({
            animation: function($expl, data){
                squaresIntersectAnimation(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
