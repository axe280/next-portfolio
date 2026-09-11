"use client";

import React, { useEffect, useRef } from "react";

export default function HeroGraduatedCodeDecor({
  theme,
}: {
  theme: "dark" | "light";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const THEME_COLORS = {
    light: {
      base: "rgba(30, 35, 45, ",
      typing: "rgb(30, 35, 45)", // Vivid blue for light mode
    },
    dark: {
      base: "rgba(220, 225, 235, ",
      typing: "rgb(220, 255, 235)", // Crisp solid white for dark mode active typing
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const colors = THEME_COLORS[theme] || THEME_COLORS.dark;

    // --- 1. Retina Canvas Scaling & Dynamic Resizing ---
    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.scale(dpr, dpr);

      generateCodeNodes();
    };

    // --- 2. Icon, Tech, Predator, & Japanese Vector Paths ---
    const pathLightning = new Path2D("M1 -5 L-3 0 L0 0 L-1 5 L3 0 L0 0 Z");
    const pathHtmlLeft = new Path2D("M-2.5 -3.5 L-5 0 L-2.5 3.5");
    const pathHtmlSlash = new Path2D("M-1 4.5 L1 -4.5");
    const pathHtmlRight = new Path2D("M2.5 -3.5 L5 0 L2.5 3.5");
    const pathHeart = new Path2D(
      "M0 3.2 C-3.8 0.4 -4.8 -2.4 -2.5 -3.6 C-1 -4.4 0 -2 0 -2 C0 -2 1 -4.4 2.5 -3.6 C4.8 -2.4 3.8 0.4 0 3.2 Z M-1.8 -4.2 C-3.3 -4.9 -5.2 -3 -4.1 -1.3 C-3 -0.2 -1.5 1.5 0 2.8 C1.5 1.5 3 -0.2 4.1 -1.3 C5.2 -3 3.3 -4.9 1.8 -4.2 C0.9 -3.8 0.4 -2.8 0 -2 C-0.4 -2.8 -0.9 -3.8 -1.8 -4.2 Z",
    );
    const pathX1 = new Path2D("M-3.5 -3.5 L3.5 3.5");
    const pathX2 = new Path2D("M3.5 -3.5 L-3.5 3.5");
    const pathStar = new Path2D(
      "M0 -5 L1.2 -1.5 L5 -1.5 L2 0.8 L3.2 4.5 L0 2.2 L-3.2 4.5 L-2 0.8 L-5 -1.5 L-1.2 -1.5 Z",
    );
    const pathCheck = new Path2D("M-4 -1 L-1.5 2.5 L5 -4");

    const pathPredatorGlyph1 = new Path2D(
      "M-4 -4 H4 V-2 H-4 Z M-2 0 H2 V4 H-2 Z",
    );
    const pathPredatorGlyph2 = new Path2D("M0 -5 L4 0 L0 5 L-4 0 Z M-2 0 H2");
    const pathPredatorGlyph3 = new Path2D("M-4 -4 V4 H-2 V-2 H2 V4 H4 V-4 Z");
    const pathAlienRune1 = new Path2D(
      "M-3 -4 H3 V-2 H1 V2 H3 V4 H-3 V2 H-1 V-2 H-3 Z",
    );
    const pathAlienRune2 = new Path2D(
      "M0 -5 L3 -2 L0 1 L-3 -2 Z M-4 3 H4 V5 H-4 Z",
    );

    const drawShape = (
      context: CanvasRenderingContext2D,
      type: number,
      alpha: number,
      isTyping: boolean,
    ) => {
      if (alpha <= 0) return;

      context.save();

      if (isTyping) {
        context.strokeStyle = colors.typing;
        context.fillStyle = colors.typing;
        context.lineWidth = 1.3;
      } else {
        context.strokeStyle = `${colors.base}${alpha})`;
        context.fillStyle = `${colors.base}${alpha})`;
        context.lineWidth = 1.0;
      }

      switch (type) {
        case 0:
          context.stroke(pathLightning);
          break;
        case 1:
          context.stroke(pathHtmlLeft);
          context.stroke(pathHtmlSlash);
          context.stroke(pathHtmlRight);
          break;
        case 2:
          context.font = "600 6.5px system-ui, -apple-system, sans-serif";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("JS", 0, 0.5);
          break;
        case 3:
          context.fill(pathHeart);
          break;
        case 4:
          context.stroke(pathX1);
          context.stroke(pathX2);
          break;
        case 5:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("{", 0, 0.5);
          break;
        case 6:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("}", 0, 0.5);
          break;
        case 7:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("[", 0, 0.5);
          break;
        case 8:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("]", 0, 0.5);
          break;
        case 9:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("(", 0, 0.5);
          break;
        case 10:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(")", 0, 0.5);
          break;
        case 11:
          context.font = "600 6px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("=>", 0, 0.5);
          break;
        case 12:
          context.stroke(pathStar);
          break;
        case 13:
          context.stroke(pathCheck);
          break;
        case 14:
          context.font = "600 8.5px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(";", 0, 0.5);
          break;
        case 15:
          context.font = "600 9px monospace";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(".", 0, 0.5);
          break;
        case 16:
          context.stroke(pathPredatorGlyph1);
          break;
        case 17:
          context.stroke(pathPredatorGlyph2);
          break;
        case 18:
          context.stroke(pathPredatorGlyph3);
          break;
        case 19:
          context.stroke(pathAlienRune1);
          break;
        case 20:
          context.stroke(pathAlienRune2);
          break;
        case 21:
          context.font = "600 7px sans-serif";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("月", 0, 0.5);
          break;
        case 22:
          context.font = "600 7px sans-serif";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("火", 0, 0.5);
          break;
      }
      context.restore();
    };

    class CodeNode {
      x: number;
      y: number;
      rowIndex: number;
      shape: number;
      alpha: number;

      delayFrames: number = 0;
      isTypingActive: boolean = false;

      constructor(
        x: number,
        y: number,
        rowIndex: number,
        initialShape: number,
        alpha: number,
      ) {
        this.x = x;
        this.y = y;
        this.rowIndex = rowIndex;
        this.shape = initialShape;
        this.alpha = alpha;
      }

      startTyping(delay: number) {
        let newShape;
        do {
          newShape = Math.floor(Math.random() * 23);
        } while (newShape === this.shape);

        this.shape = newShape;
        this.delayFrames = delay;
        this.isTypingActive = true;
      }

      update() {
        if (!this.isTypingActive) return;

        if (this.delayFrames > 0) {
          this.delayFrames--;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(Math.round(this.x), Math.round(this.y));

        const currentlyTyping = this.isTypingActive && this.delayFrames === 0;

        drawShape(context, this.shape, this.alpha, currentlyTyping);

        context.restore();
      }
    }

    let nodes: CodeNode[] = [];
    let rowIndicesList: number[] = [];
    let lastAnimationTime = 0;
    const animationInterval = 2000;

    const generateCodeNodes = () => {
      nodes = [];
      const itemSpacingX = 13;
      const itemSpacingY = 19;

      const targetHeight = window.innerHeight * 0.75;
      const maxRows = Math.floor(targetHeight / itemSpacingY);
      let indentLevel = 0;

      const uniqueRows = new Set<number>();

      for (let row = 0; row < maxRows; row++) {
        const rowY = row * itemSpacingY + 20;
        const rightEdgeX = width - 10;
        uniqueRows.add(row);

        let count = 0;
        if (row < 20) {
          count = 20 + Math.floor(Math.random() * 26);
        } else {
          const excess = row - 20;
          const maxLimit = Math.max(5, 25 - Math.floor(excess * 0.7));
          count = 4 + Math.floor(Math.random() * maxLimit);
        }

        const rowType = Math.random();

        const getAlienWeightedShape = () => {
          const rand = Math.random();
          if (rand < 0.55) {
            const pool = [
              0, 1, 2, 3, 4, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22,
            ];
            return pool[Math.floor(Math.random() * pool.length)];
          } else {
            return Math.floor(Math.random() * 11) + 5;
          }
        };

        if (rowType < 0.25) {
          let currentX = rightEdgeX - indentLevel * 18;
          nodes.push(new CodeNode(currentX, rowY, row, 5, 0.45));
          currentX -= itemSpacingX;

          for (let i = 0; i < count; i++) {
            nodes.push(
              new CodeNode(
                currentX,
                rowY,
                row,
                getAlienWeightedShape(),
                0.18 + Math.random() * 0.28,
              ),
            );
            currentX -= itemSpacingX;
          }
          indentLevel = Math.min(indentLevel + 1, 4);
        } else if (rowType < 0.4) {
          indentLevel = Math.max(0, indentLevel - 1);
          let currentX = rightEdgeX - indentLevel * 18;
          nodes.push(new CodeNode(currentX, rowY, row, 6, 0.45));
          if (Math.random() > 0.4) {
            nodes.push(
              new CodeNode(currentX - itemSpacingX, rowY, row, 14, 0.35),
            );
          }
        } else if (rowType < 0.7) {
          let currentX = rightEdgeX - indentLevel * 18;
          nodes.push(new CodeNode(currentX, rowY, row, 8, 0.4));
          currentX -= itemSpacingX;

          for (let i = 0; i < count; i++) {
            nodes.push(
              new CodeNode(
                currentX,
                rowY,
                row,
                getAlienWeightedShape(),
                0.16 + Math.random() * 0.28,
              ),
            );
            currentX -= itemSpacingX;
          }
          nodes.push(new CodeNode(currentX, rowY, row, 7, 0.4));
        } else {
          let currentX = rightEdgeX - indentLevel * 18;
          for (let i = 0; i < count; i++) {
            let shape = getAlienWeightedShape();
            if (i === 2 && count > 4) shape = 10;
            if (i === count - 3 && count > 4) shape = 9;
            if (i === count - 2 && count > 2) shape = 11;

            nodes.push(
              new CodeNode(
                currentX,
                rowY,
                row,
                shape,
                0.15 + Math.random() * 0.28,
              ),
            );
            currentX -= itemSpacingX;
          }
        }
      }

      rowIndicesList = Array.from(uniqueRows);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      if (
        timestamp - lastAnimationTime > animationInterval &&
        rowIndicesList.length > 0
      ) {
        lastAnimationTime = timestamp;
        const randomRow =
          rowIndicesList[Math.floor(Math.random() * rowIndicesList.length)];

        const rowNodes = nodes
          .filter((node) => node.rowIndex === randomRow)
          .sort((a, b) => b.x - a.x);

        if (rowNodes.length > 0) {
          rowNodes.forEach((node, index) => {
            node.startTyping(index * 8);
          });
        }
      }

      nodes.forEach((node) => {
        node.update();
        node.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
